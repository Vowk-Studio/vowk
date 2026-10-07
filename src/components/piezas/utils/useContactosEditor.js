import { useCallback } from 'react';

export const useContactosEditor = (config, updateSectionProp) => {
  const socialList = config.sections.contactos.socialList || [];

  const addSocialLink = useCallback(() => {
    if (socialList.length >= 5) return;
    const nuevaRed = { id: Date.now(), platform: 'instagram', url: '', visible: true };
    updateSectionProp('contactos', 'socialList', [...socialList, nuevaRed]);
  }, [socialList, updateSectionProp]);

  const removeSocialLink = useCallback((index) => {
    const nuevaLista = socialList.filter((_, i) => i !== index);
    updateSectionProp('contactos', 'socialList', nuevaLista);
  }, [socialList, updateSectionProp]);

  const updateSocialLink = useCallback((index, field, value) => {
    const nuevaLista = [...socialList];
    let processedValue = value;

    if (field === 'url') {
      // Seguridad: Sanitización de HTML
      processedValue = value.replace(/<[^>]*>?/gm, '');
      
      // Lógica de negocio: Blindaje de espacios según plataforma
      if (nuevaLista[index].platform === 'location') {
        processedValue = processedValue.trimStart();
      } else {
        processedValue = processedValue.trim().replace(/\s+/g, '');
      }
    }

    nuevaLista[index][field] = processedValue;
    updateSectionProp('contactos', 'socialList', nuevaLista);
  }, [socialList, updateSectionProp]);

  const updateText = useCallback((field, value) => {
    const cleanValue = value.replace(/<[^>]*>?/gm, '');
    updateSectionProp('contactos', field, cleanValue);
  }, [updateSectionProp]);

  return {
    socialList,
    addSocialLink,
    removeSocialLink,
    updateSocialLink,
    updateText
  };
};
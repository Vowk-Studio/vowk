import React from 'react';
import { Instagram, Linkedin, Facebook, X, Youtube, Mail, Link as LinkIcon } from 'lucide-react';

const ICON_COMPONENTS = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  x: X,
  youtube: Youtube,
  mail: Mail
};

// --- VERSION 1: Minimalista Centrado ---
export const FootersV1 = (props) => {
  const { paddingY, bgColor, textColor, brandName, socialList } = props;
  
  return (
    <footer 
      style={{ 
        backgroundColor: bgColor || '#000000', 
        padding: `${paddingY || 60}px 5cqw`, 
        color: textColor || '#ffffff' 
      }} 
      className="w-full relative z-10 flex flex-col items-center text-center"
    >
      <div className="flex items-center gap-[1.5cqw] mb-[2cqw]">
        <div className="h-[1px] w-[5cqw] bg-current opacity-20"></div>
        <span className="w-[0.8cqw] h-[0.8cqw] bg-current rounded-full"></span>
        <div className="h-[1px] w-[5cqw] bg-current opacity-20"></div>
      </div>

      <h2 className="text-[4cqw] font-black uppercase italic tracking-tighter mb-[2cqw]">
        {brandName || "VOWK STUDIO"}
      </h2>

      <div className="flex gap-[3cqw] mb-[3cqw]">
        {socialList?.map((red) => {
          if (!red.visible || !red.url) return null;
          const IconTag = ICON_COMPONENTS[red.platform] || LinkIcon;
          return (
            <a 
              key={red.id} 
              href={red.platform === 'mail' ? `mailto:${red.url}` : red.url} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:opacity-50 transition-opacity"
            >
              <IconTag size="1.8cqw" />
            </a>
          );
        })}
      </div>
      
      <p className="text-[0.8cqw] uppercase tracking-[0.3em] opacity-40">© 2026 — ALL RIGHTS RESERVED</p>
    </footer>
  );
};

// --- VERSION 2: Corporativo / Grilla ---
export const FootersV2 = (props) => {
  const { paddingY, bgColor, textColor, brandName, socialList } = props;
  
  return (
    <footer 
      style={{ 
        backgroundColor: bgColor || '#ffffff', 
        padding: `${paddingY || 40}px 8cqw`, 
        color: textColor || '#000000' 
      }} 
      className="w-full relative z-10 border-t border-black/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[4cqw] items-center text-center lg:text-left">
        <div>
          <h2 className="text-[2cqw] font-black uppercase italic">{brandName || "VOWK"}</h2>
          <p className="text-[0.8cqw] opacity-50 uppercase">Creative Design Agency</p>
        </div>

        <div className="flex justify-center items-center gap-[1cqw]">
          <span className="w-[0.6cqw] h-[0.6cqw] bg-current rounded-full"></span>
          <p className="text-[0.9cqw] font-bold uppercase tracking-widest">Digital Experience</p>
          <span className="w-[0.6cqw] h-[0.6cqw] bg-current rounded-full"></span>
        </div>

        <div className="flex justify-center lg:justify-end gap-[2cqw]">
          {socialList?.map((red) => {
            if (!red.visible || !red.url) return null;
            return (
              <a 
                key={red.id} 
                href={red.platform === 'mail' ? `mailto:${red.url}` : red.url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[0.9cqw] font-black uppercase hover:line-through"
              >
                {red.platform}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

// --- VERSION 3: Bold / Contact Focus ---
export const FootersV3 = (props) => {
  const { paddingY, bgColor, textColor, brandName, socialList } = props;
  
  // Buscamos si hay un mail en la lista para mostrarlo destacado
  const mailLink = socialList?.find(red => red.platform === 'mail' && red.visible)?.url;
  
  return (
    <footer 
      style={{ 
        backgroundColor: bgColor || '#f5f5f5', 
        padding: `${paddingY || 80}px 0`, 
        color: textColor || '#000000' 
      }} 
      className="w-full relative z-10 overflow-hidden flex flex-col items-center"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[25cqw] font-black leading-none">{brandName || "VOWK"}</h1>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-[2cqw]">
        <div className="flex items-center gap-[1cqw]">
          <div className="w-[10cqw] h-[1px] bg-current opacity-10"></div>
          <span className="w-[0.5cqw] h-[0.5cqw] bg-current rounded-full"></span>
          <div className="w-[10cqw] h-[1px] bg-current opacity-10"></div>
        </div>

        <a 
          href={mailLink ? `mailto:${mailLink}` : "#"} 
          className="text-[3cqw] font-light italic hover:scale-105 transition-transform duration-500"
        >
          {mailLink || "CONECTAR"}
        </a>

        <div className="flex gap-[2cqw] pt-[1cqw]">
          {socialList?.map((red) => {
            if (!red.visible || !red.url || red.platform === 'mail') return null;
            const IconTag = ICON_COMPONENTS[red.platform] || LinkIcon;
            return (
              <a key={red.id} href={red.url} target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100">
                <IconTag size="1.2cqw" />
              </a>
            );
          })}
        </div>
        
        <p className="text-[0.7cqw] font-black uppercase tracking-[0.5em] opacity-30 pt-[1cqw]">
          Designed in Buenos Aires
        </p>
      </div>
    </footer>
  );
};
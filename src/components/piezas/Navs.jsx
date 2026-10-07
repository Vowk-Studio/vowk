import React from 'react';
import { toCQ, scrollToSection } from './utils/layout';

/**
 * Sub-componente BrandArea: Mantiene la lógica de identidad visual.
 * Se mantiene en este archivo por ser exclusivo de los Navs.
 */
const BrandArea = ({ config, onMouseDown }) => {
  const { 
    showLogo, showText, logoUrl, logoSize, logoPosX, logoPosY,
    brandText, brandFontSize, brandColor, brandFontFamily 
  } = config;

  return (
    <div 
      onMouseDown={(e) => onMouseDown(e, 'brand')}
      style={{
        position: 'absolute',
        left: `${logoPosX}%`,
        top: `${logoPosY}%`,
        cursor: 'move',
        display: 'flex',
        alignItems: 'center',
        gap: '1cqw',
        zIndex: 50,
        userSelect: 'none'
      }} 
    >
      {showLogo && logoUrl && (
        <img src={logoUrl} alt="logo" style={{ height: toCQ(logoSize) }} className="w-auto object-contain pointer-events-none" />
      )}
      {showText && (
        <span className={`${brandFontFamily} font-black uppercase whitespace-nowrap leading-none`} 
              style={{ color: brandColor, fontSize: toCQ(brandFontSize) }}>
          {brandText}
        </span>
      )}
    </div>
  );
};

// --- VERSIONES DE NAVS ---

export const NavV1 = (props) => (
  <nav className={`w-full relative ${props.navFontFamily}`} id='inicio' style={{ backgroundColor: props.bgColor, height: '8cqw' }}>
    <div className="flex items-center w-full px-[5cqw] h-full">
      <BrandArea config={props} onMouseDown={props.onMouseDown} />
      <div className="flex flex-grow items-center justify-end gap-[2cqw]">
        {props.links?.map((link, index) => (
          <span key={index} 
            onClick={() => scrollToSection(link)}
            className="font-bold uppercase tracking-widest cursor-pointer hover:opacity-70 transition-opacity" 
            style={{ 
              color: index === props.links.length - 1 ? props.buttonBg : props.textColor, 
              fontSize: toCQ(props.fontSize) 
            }}>
            {link}
          </span>
        ))}
      </div>
    </div>
  </nav>
);

export const NavV2 = (props) => (
  <nav className={`w-full relative ${props.navFontFamily}`} id='inicio' style={{ backgroundColor: props.bgColor, height:`${props.navHeight}cqw`, minHeight: '80px' }}>
    <BrandArea config={props} onMouseDown={props.onMouseDown} />
    <div 
      onMouseDown={(e) => props.onMouseDown(e, 'menu')}
      className="rounded-[5cqw] py-[0.8cqw] flex justify-center items-center shadow-lg border border-white/20 backdrop-blur-md transition-all"
      style={{ 
        position: 'absolute',
        left: `${props.navPosX}%`,
        top: `${props.navPosY}%`,
        transform: 'translate(-50%, -50%)',
        backgroundColor: props.navContainerBg,
        width: '90%',
        paddingLeft: '5cqw',
        paddingRight: '5cqw',
        gap: '10cqw',
        cursor: 'move',
        zIndex: 40
      }}
    >
      {props.links?.map((link, index) => (
        <span key={index} 
          onClick={() => scrollToSection(link)}
          className="cursor-pointer font-black uppercase tracking-tighter whitespace-nowrap hover:scale-105 transition-transform"
          style={{ 
            color: index === props.links.length - 1 ? props.buttonBg : props.textColor, 
            fontSize: toCQ(props.fontSize) 
          }}>
          {link}
        </span>
      ))}
    </div>
  </nav>
);

export const NavV3 = (props) => (
  <nav className={`w-full relative ${props.navFontFamily}`} 
       style={{ backgroundColor: props.bgColor, height: `${props.navHeight}cqw`, minHeight: '80px' }}>
    
    <div className="w-full h-[2cqw] relative"> 
      <BrandArea config={props} onMouseDown={props.onMouseDown} />
    </div>

    <div 
      onMouseDown={(e) => props.onMouseDown(e, 'menu')}
      className="flex gap-[0.5cqw] justify-center p-[0.5cqw] rounded-[1.5cqw] backdrop-blur-lg border border-white/10 shadow-xl"
      id='inicio'
      style={{
        position: 'absolute',
        left: `${props.navPosX}%`,
        top: `${props.navPosY}%`,
        transform: 'translate(-50%, -50%)',
        backgroundColor: props.navContainerBg,
        cursor: 'move',
        width: '90%',
        zIndex: 40
      }}
    >
      {props.links?.map((link, index) => (
        <button 
          key={index} 
          onClick={() => scrollToSection(link)}
          className="flex-1 py-[0.6cqw] rounded-[1cqw] font-black uppercase tracking-widest transition-all border-none hover:brightness-110 active:scale-95 cursor-pointer"
          style={{ 
            backgroundColor: props.buttonBg,
            color: props.buttonTextColor,
            fontSize: toCQ(props.fontSize)
          }}
        >
          {link}
        </button>
      ))}
    </div>
  </nav>
);
// Welcome to Template by Dee S. (https://dees.lemonsqueezy.com/)
// Follow https://twitter.com/deespnr
import{jsx as _jsx}from"react/jsx-runtime";import{useEffect}from"react";import{addPropertyControls,ControlType}from"framer";export default function ColorsSelection(props){useEffect(()=>{if(props.enableSelection){const styleId="selection-styles";const existingStyle=document.getElementById(styleId);if(existingStyle){existingStyle.remove();}const style=document.createElement("style");style.id=styleId;style.innerHTML=`
        ::selection { 
          background: ${props.selectionBackgroundColor};
          color: ${props.selectionTextColor};
        }
        ::-moz-selection { 
          background: ${props.selectionBackgroundColor};
          color: ${props.selectionTextColor};
        }`;document.head.appendChild(style);}else{const style=document.getElementById("selection-styles");if(style){style.remove();}}},[props.enableSelection,props.selectionBackgroundColor,props.selectionTextColor]);return /*#__PURE__*/_jsx("div",{});}ColorsSelection.displayName="Selection colors";addPropertyControls(ColorsSelection,{enableSelection:{title:"Selection",type:ControlType.Boolean,defaultValue:true,enabledTitle:"Yes",disabledTitle:"No",description:"Use to change the colour of selected text and background"},selectionBackgroundColor:{title:"Background",type:ControlType.Color,defaultValue:"#000",hidden(props){return!props.enableSelection;}},selectionTextColor:{title:"Text color",type:ControlType.Color,defaultValue:"#fff",hidden(props){return!props.enableSelection;}}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"ColorsSelection","slots":[],"annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Color.map
import { useEffect } from 'react';
import { navigate } from "@reach/router"

export default () => {
  
    if (typeof window !== 'undefined') {
        window.location = '/';
      }
  
  return null;
};
import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingModule';


export default function MarketingApp() {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    })

  return (
    <div ref={ref} />
  );
}

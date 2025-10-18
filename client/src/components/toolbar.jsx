import React, { useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

export default function Toolbar() {

            useEffect(() => {
            const quill = new Quill('#editor', {
                theme: 'snow'
            });

                return () => {
        document.getElementById('editor').innerHTML = '';
        };}, []);

  return (
    <div>
      <div id = "editor" className="justify-center mx-auto mt-40">
      </div>
    </div>
  )
};

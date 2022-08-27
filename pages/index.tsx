import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [value, setValue] = useState('')
  return(
    <ReactQuill value={value} onChange={setValue}/>
  )
}

export default Editor

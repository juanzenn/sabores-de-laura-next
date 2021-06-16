import React from "react"
import Head from 'next/head'
import AboutSection from "../components/About/AboutSection"
import Mission from '../components/About/Mission'

export default function About() {
  return (
    <>
    <Head>
      <title>Sabores de Laura - Historia</title>
    </Head>
    <main>
      <AboutSection
        title="The quick fox Jumps"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            illum in quisquam! Eveniet assumenda similique dicta! Magni aperiam
            voluptate corporis deserunt, eaque quam expedita? Provident, magnam.
            Quis assumenda expedita ab consequatur eius! Eius, aliquid tempora?
            Sequi illo repudiandae aliquam voluptatum aut adipisci ut totam
            tempora deleniti error, dolores, asperiores nam at soluta."
      />
      <AboutSection
        title="The quick fox Jumps"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            illum in quisquam! Eveniet assumenda similique dicta! Magni aperiam
            voluptate corporis deserunt, eaque quam expedita? Provident, magnam.
            Quis assumenda expedita ab consequatur eius! Eius, aliquid tempora?
            Sequi illo repudiandae aliquam voluptatum aut adipisci ut totam
            tempora deleniti error, dolores, asperiores nam at soluta."
        reverse={true}
      />
      <AboutSection
        title="The quick fox Jumps"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            illum in quisquam! Eveniet assumenda similique dicta! Magni aperiam
            voluptate corporis deserunt, eaque quam expedita? Provident, magnam.
            Quis assumenda expedita ab consequatur eius! Eius, aliquid tempora?
            Sequi illo repudiandae aliquam voluptatum aut adipisci ut totam
            tempora deleniti error, dolores, asperiores nam at soluta."
      />
      <Mission />
    </main>
    </>
    
  )
}

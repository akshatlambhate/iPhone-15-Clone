import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Loader from './Loader.jsx'
import Lights from './Lights'
import IPhoneModel from './ModelPhone.jsx'
import * as THREE from 'three'

const ModelView = ({index,groupRef,gsapType,controlRef,setRotationState,size,item}) => {
  return (
    <div>
       <View className={`w-full h-[90vh] absolute sm:h-screen  ${index===2 ?'right-[-100%]': ''} `} index={index} id={gsapType}>

        <ambientLight intensity={0.3} />
        <PerspectiveCamera makeDefault position={[0,0,4]} />
        <Lights />
        <OrbitControls makeDefault ref={controlRef} enableZoom={false} enablePan={false} rotateSpeed={0.4} target={new THREE.Vector3(0,0,0)} onEnd={()=> setRotationState(controlRef.current.getAzimuthalAngle())} />
        <group ref={groupRef} name={`${index==1} ? 'small' :'large' `} position={[0,0,0]} >
        <Suspense fallback={<Loader />} >
           <IPhoneModel
            scale ={index ===1 ?[15,15,15]:[17,17,17] }
            item={item}
            size={size}
           />
        </Suspense>
        </group>

      

       </View>
    </div>
  )
}

export default ModelView;

import * as THREE from 'three';

export function HeroSection() {const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    camera.position.z = 5;
    document.addEventListener('load',function (){
        document.getElementById('hero-left').append( renderer.domElement );
        scene.add( cube );

    })
    return (
        <>
            <div id="hero">
                <div id="hero-right">
                    <div>
                        <h1  >أكتوبر</h1>
                        <p>لم تكن البداية إنما صحوة بعد سنوات من الاحتلال و الإبادة</p>
                        <p>تم إنشاء هذا الموقع ليحكي القصة الحقيقية لواحد من أكبر الأحداث المغيرة للعالم في التاريخ الجديد</p>
                        <button className='btn' >إقرأ المزيد</button>
                    </div>
                </div>
                <div id="hero-left">
                </div>
            </div>
        </>
    )
}
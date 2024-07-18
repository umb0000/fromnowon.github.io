// 장면, 카메라, 렌더러 설정
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true 설정
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 배경 제거 (배경을 투명하게 설정)
scene.background = null;

// 큐브 텍스처 로드
const textureLoader = new THREE.TextureLoader();
textureLoader.load('logo.png', function(texture) {
    const geometry = new THREE.BoxGeometry(1, 0.5, 1);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 카메라 위치
    camera.position.z = 3;
    camera.position.y = -0.5;

    // 애니메이션 함수
    function animate() {
        requestAnimationFrame(animate);

        // 큐브 회전 (뒤집기)
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();
});

// 창 크기 조정에 따른 반응형
window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

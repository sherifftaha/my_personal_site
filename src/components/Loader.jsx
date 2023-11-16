import { Html, useProgress } from "@react-three/drei"


const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className="canvas-load"></span>
      <div
        style={{
          width: '200px',
          height: '20px',
          backgroundColor: '#f1f1f1',
          borderRadius: '10px',
          position: 'relative',
          right: '100px',
        }}
      >

        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#915eff',
            borderRadius: 'inherit',
          }}
        />
        <p
          style={{
            fontSize: 14,
            color: '#f1f1f1',
            fontWeight: 800,
            marginTop: 10,
            width: '100%',
            textAlign: 'center',
            // position: 'relative',
            // left: '7px'
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  )
}

export default Loader
import { useState, useRef, useEffect, CanvasHTMLAttributes } from 'react'

const Canvas = (props:CanvasHTMLAttributes<any>) => {
  const[circleColor, setCircleColor] = useState<string>("black")

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const colorRef =  useRef("pink")
  const circlePos = useRef(50)

  const moveCircle = () =>{
    circlePos.current = circlePos.current + 10
  }

  
  const draw = (ctx:any, frameCount:number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = colorRef.current
    ctx.beginPath()
    ctx.arc(circlePos.current, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    let frameCount = 0
    let animationFrameId:any

    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()
    
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  return (
    <>
      <div
      style={{
        display:'flex',
        justifyContent:'center'
      }}>
        <canvas
        style={{
          border:'1px solid black'
        }} 
        ref={canvasRef} 
        {...props}/>
      </div>

      <button
      onClick={()=>{ colorRef.current="red" }}>
        RED
      </button>
      <button
      onClick={()=>{ colorRef.current="green" }}>
        GREEN
      </button>
      <button
      onMouseDown={()=>{ moveCircle() }}>
        MOVE RIGHT
      </button>
    </>
  )
}

export default Canvas
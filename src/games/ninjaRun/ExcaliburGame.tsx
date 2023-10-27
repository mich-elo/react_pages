import { useRef, useEffect } from 'react'

const ExcaliburGame = (props:any) => {
  
  const gameElement = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const loadGame = async () => {                        

      const ex =  await import('excalibur');

      const game = new ex.Engine({ 
        width: 500, 
        height: 600,
        canvasElementId: gameElement.current!["id"]
      })

      const ninjaRunSprite = new ex.ImageSource('./img/ninjaRun.png')
      const ninjaIdleSprite = new ex.ImageSource('./img/ninjaIdle.png')

      const loader = new ex.Loader()

      loader.addResource(ninjaRunSprite)
      loader.addResource(ninjaIdleSprite)

      const ninjaRunSheet  = ex.SpriteSheet.fromImageSource({
        image: ninjaRunSprite,
        grid: {
            rows: 1,
            columns: 9,
            spriteWidth: 363,
            spriteHeight: 458
        },
      });
      const runAnim = ex.Animation.fromSpriteSheet(ninjaRunSheet , ex.range(1, 10), 24);


      const ninjaIdleSheet  = ex.SpriteSheet.fromImageSource({
        image: ninjaIdleSprite,
        grid: {
            rows: 1,
            columns: 9,
            spriteWidth: 232,
            spriteHeight: 439
        },
      });
      const idleAnim = ex.Animation.fromSpriteSheet(ninjaIdleSheet , ex.range(1, 10), 70);



      const ninjaPlayer = new ex.Actor({
        pos: ex.vec(200, game.halfDrawHeight),
        name: 'player', // optionally assign a name
        color: ex.Color.Red,
        scale: ex.vec(0.25, 0.25)
      });


      /* ADDING ELEMENTS TO GAME */
      game.start(loader);
      game.add(ninjaPlayer)

      var ninjaRunSpeed = ex.vec(400, 0);


      ninjaPlayer.on("postupdate", ()=>{

        if(game.input.keyboard.isHeld(ex.Input.Keys.Right)){
          ninjaPlayer.graphics.flipHorizontal = false;
          ninjaPlayer.graphics.use(runAnim)
          ninjaPlayer.vel.x = ninjaRunSpeed.x;
        }

        else if(game.input.keyboard.isHeld(ex.Input.Keys.Left)){
          ninjaPlayer.graphics.flipHorizontal = true;
          ninjaPlayer.graphics.use(runAnim)
          ninjaPlayer.vel.x = ninjaRunSpeed.x * (-1);
        }


        else{
          ninjaPlayer.graphics.use(idleAnim)
          ninjaPlayer.vel.x = 0
        }
        
      })




    }

    loadGame()

  }, [])
  
  return (
    <div
    style={{
      display:'flex',
      justifyContent:'center'
    }}>
      <canvas
      id="game" 
      ref={gameElement} />
    </div>
  )
}

export default ExcaliburGame
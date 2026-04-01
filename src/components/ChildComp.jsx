
import App from '../App'


export default function ChildComp ({imageInfo,width=200,height}) {
  return(
    <>
     <img src={imageInfo.src} alt={imageInfo.alt} width={width} height={height}/>
    </>
  )
}
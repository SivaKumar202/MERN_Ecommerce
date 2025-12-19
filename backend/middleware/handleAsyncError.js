export default (myErrorrFun)=>(req,res,next)=>{
    Promise.resolve(myErrorrFun(req,res,next)).catch(next)
}
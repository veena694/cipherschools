const generateToken = (payload)=>{
    const token = jwt.sign(payload,CS_SECRET_KEY,{expiresIn:"1h"})
};

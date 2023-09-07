export const register = async (req, res) => {

    try {

        const payload = req.body
        const userExists = await User.findOne({email: payload.email})

        if (userExists){
            return res.status(403).json({message:"User Exists"})
        }

    }catch(error){

    }
}

export const login = (req, res) => {
    try {
        const {password, email} = req.body

        const userFounded = User.findOne({email: email})

        if (userFounded){

            if (verifyPassword(password, userFounded.password)){
                return res.status(200).json({message:"successfylly logged in", user: userFounded})

            }else {
                return res.status(400).json({message:"wrong password"});
            }

        }else{
            return res.status(400).json({message:"User not founded"});

        }

    }catch (err){
        
    }
}
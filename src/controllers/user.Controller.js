import UserService from "../service/user.Service.js";

class UserController {

    static welcome(_req,res)
    {
        res.send({message:"Bienvenido a la Api de Alejandro Bongioanni", documentation: "https://documenter.getpostman.com/view/14969183/UzdzTRE1"})
    }
    static loginUser(req, res)
    {
        UserService.loginUser(req.body)
        .then(data=>res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));
        
    }

    static registerUser(req, res)
    {
        UserService.addUser(req.body)
        .then(data=> res.status(data.code).send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));
    }

    static uploadImage(req,res)
    {
        UserService.addImageToUser(req.file,req.user)
        .then(data=> res.send(data))
        .catch(error=> res.status(500).send({status: "error",message:`${error.message}`}));   
    }

}


export default UserController;
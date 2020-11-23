import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';


class Server {
    public app: express.Application;
    constructor(){

        this.app=express();
        this.config();
        this.routes();
    }

    config(){
        // this.app.set('port',process.env.PORT || 3000);
        this.app.set('port',3000);
        this.app.use(morgan('dev'));
        this.app.use(helmet());

    }

    routes(){
        this.app.get('/',(req,res)=>res.send('hello'))

    }
    start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on ports sss',this.app.get('port'));
        })
    }

}

const server = new Server();
server.start();
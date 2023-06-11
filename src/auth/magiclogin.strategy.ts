//import { Payload } from "@nestjs/microservices";
import { Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy){
    private readonly logger = new Logger(MagicLoginStrategy.name)
    constructor(){
        super({
            secrete: 'your secrete', //get from environment variables
            jwtOptions: {
                expiresIn: '5m'
            },
            callbackUrl: 'localhost/3000/auth/login/callback',
            sendMagicLink: (destination, href) => {
                this.logger.debug(`sending eamail to ${destination} with link${href}`);
            },
            verify: async(Payload, callback) =>
                callback(null, this.validate(Payload)),
        });
    }

    validate(Payload: {destination: string}) {

    }
}
import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(AuthService) private authService: AuthService) {
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request  = context.switchToHttp().getRequest();
    const bearer = request?.headers?.authorization?.split?.(' ')?.[1]
    if(bearer) {
      try{
        request['auth'] = this.authService.verify(bearer);
        // console.log( request['auth'] );
        return true
      }
      catch (e){}
    }
    return false
  }
}

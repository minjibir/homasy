package controllers;

import models.Staff;
import play.mvc.Http.Context;
import play.mvc.Result;
import play.mvc.Security;
import utilities.TokenService;

import java.util.List;

public class Secured extends Security.Authenticator {
    public final static String AUTH_TOKEN_HEADER = "Authorization";

    @Override
    public String getUsername(Context ctx) {
        List<String> headers = ctx
                .request()
                .getHeaders()
                .getAll(AUTH_TOKEN_HEADER);

        if (headers != null && !headers.isEmpty()) {
            String token = headers.get(0);

            try {
                Integer uuid = Integer.parseInt(TokenService.decodeToken(token));
                Staff staff = Staff.find.byId(uuid);
                if ( staff != null) {
                    ctx.args.put("uuid", uuid);
//                    ctx.args.put("role", staff.role);
                    return uuid.toString();
                }
            } catch (NumberFormatException e) {
                e.getMessage();
            }
        }

        return null;
    }

    @Override
    public Result onUnauthorized(Context ctx) {
        return unauthorized("unauthorized");
    }

}

package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Staff;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Security;
import utilities.TokenService;

public class SecurityController extends Controller{
        public static final int TOKEN_MAX_AGE = 300000000;

    @BodyParser.Of(BodyParser.Json.class)
    public Result login() {

        JsonNode jsonNode = request().body().asJson();
        Staff staff = Json.fromJson(jsonNode, Staff.class);

        if (staff != null && staff.username != null && staff.password != null) {

            staff = Staff
                    .findByUsernameAndPassword(staff.username, staff.password)
                    .orElse(new Staff());

            if (staff.username != null) {
                String token = TokenService.encodeToken(staff.uuid.toString(), "homasy", staff.username, TOKEN_MAX_AGE);
                System.out.println(token);
                return ok(token);
            }
        }

        return unauthorized("Invalid username or password.");
    }

    @Security.Authenticated
    public Result logout() {
        session().clear();
        return ok("Bye");
    }

}

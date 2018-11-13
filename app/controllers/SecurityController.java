package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Staff;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Security;
import utilities.TokenService;

import java.util.HashMap;

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

                HashMap<String, String> tokenObj = new HashMap<String, String>();
                
                tokenObj.put("token", token);

                return ok(Json.toJson(tokenObj));
            }
        }

        return unauthorized("Invalid username or password.");
    }

    public Result init() {

        Staff iStaff = new Staff();

        iStaff.firstName = "Jabir";
        iStaff.lastName = "Minjibir";
        iStaff.role = "admin";
        iStaff.username = "jabyte";
        iStaff.password = "Com.Cyapex/OAGF";

        iStaff.save();

        iStaff.username = "jabyte";

        return created(Json.toJson(iStaff));
    }

    @Security.Authenticated
    public Result logout() {
        session().clear();
        return ok("Bye");
    }

}

package controllers;

import com.fasterxml.jackson.databind.JsonNode;

import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Security;

import java.util.HashMap;

import models.Staff;

 @Security.Authenticated(Secured.class)
public class StaffController extends Controller {

    @BodyParser.Of(BodyParser.Json.class)
    public Result createStaff() {
        JsonNode jsonNode = request().body().asJson();
        Staff iStaff;

        iStaff = Json.fromJson(jsonNode, Staff.class);
        iStaff.save();
        return created(Json.toJson(iStaff));
    }

    public Result getAllStaffs() {
        return ok(Json.toJson(Staff.find.all()));
    }

    public Result getStaffById(Long id) {
        return ok(Json.toJson(Staff.find.byId(id)));
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result updateStaff() {
        JsonNode jsonNode = request().body().asJson();
        Staff iStaff;

        iStaff = Json.fromJson(jsonNode, Staff.class);

        if (Staff.find.byId(iStaff.uuid) != null) {
            iStaff.update();
            return ok(Json.toJson("Updated!"));
        }

        return notFound(Json.toJson("Not found"));
    }

    public Result deleteStaff(Long id) {
        Staff staff = Staff.find.byId(id);
        if (staff != null && staff.username != null) {
            staff.delete();
            HashMap<String, String> response = new HashMap<>();
            response.put("response", "deleted");
            return ok(Json.toJson(response));
        }

        return notFound(Json.toJson("Not found!"));
    }
}

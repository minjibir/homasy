package controllers;

import com.fasterxml.jackson.databind.JsonNode;

import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Security;

import java.util.UUID;

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

    @Security.Authenticated(Secured.class)
    public Result getAllStaffs() {
        return ok(Json.toJson(Staff.find.all()));
    }

    @Security.Authenticated(Secured.class)
    public Result getStaffById(Long id) {
        return ok(Json.toJson(Staff.find.byId(id)));
    }

    @Security.Authenticated(Secured.class)
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

    @Security.Authenticated(Secured.class)
    public Result deleteStaff(Long id) {
        if (Staff.find.byId(id) != null && Staff.find.byId(id).delete()) {
            return ok(Json.toJson("Deleted!"));
        }

        return notFound(Json.toJson("Not found!"));
    }
}

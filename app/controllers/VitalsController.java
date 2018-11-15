package controllers;

import com.fasterxml.jackson.databind.JsonNode;

import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Security;

import java.util.UUID;

import models.Vitals;


// @Security.Authenticated(Secured.class)
public class VitalsController extends Controller {

    @BodyParser.Of(BodyParser.Json.class)
    public Result createVitals() {
        JsonNode jsonNode = request().body().asJson();
        Vitals iVitals;

        iVitals = Json.fromJson(jsonNode, Vitals.class);
        iVitals.save();

        return created(Json.toJson(iVitals));
    }

    public Result getAllVitals() {
        return ok(Json.toJson(Vitals.find.all()));
    }

    public Result getVitals(Long vitalId) {
        return ok(Json.toJson(Vitals.find.byId((vitalId))));
    }

    public Result getAllVitalsByPatientId(Long patientId) {
        return ok(Json.toJson(Vitals.findByPatient(patientId)));
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result updateVitals() {
        JsonNode jsonNode = request().body().asJson();
        Vitals iVitals;

        iVitals = Json.fromJson(jsonNode, Vitals.class);

        if (Vitals.find.byId(iVitals.vitalId) != null) {
            iVitals.update();
            return ok(Json.toJson(iVitals));
        }

        return notFound(Json.toJson("Not found"));
    }

    public Result deleteVitals(Long vitalId) {
        if (Vitals.find.byId(vitalId) != null && Vitals.find.byId(vitalId).delete()) {
            return ok(Json.toJson("Deleted!"));
        }

        return notFound(Json.toJson("Not found!"));
    }
}

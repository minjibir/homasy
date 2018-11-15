package controllers;

import com.fasterxml.jackson.databind.JsonNode;

import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Security;

import models.Consultation;


// @Security.Authenticated(Secured.class)
public class ConsultationController extends Controller {

    @BodyParser.Of(BodyParser.Json.class)
    public Result saveConsultation() {
        JsonNode jsonNode = request().body().asJson();

        Consultation iConsultation = Json.fromJson(jsonNode, Consultation.class);
        iConsultation.save();

        return created(Json.toJson(iConsultation));
    }

    public Result getAllConsultationByPatientId(Long patientId) {
        return ok(Json.toJson(Consultation.findByPatient(patientId)));
    }

    public Result getConsultationByConIdAndPatId(Long conId, Long patId) {
        return ok(Json.toJson(Consultation.find.byId(conId)));
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result updateConsultation() {
        JsonNode jsonNode = request().body().asJson();
        Consultation iConsultation;

        iConsultation = Json.fromJson(jsonNode, Consultation.class);

        if (Consultation.find.byId(iConsultation.consultationId) != null) {
            iConsultation.update();
            return ok(Json.toJson("Updated!"));
        }

        return notFound(Json.toJson("Not found"));
    }

//    public Result deleteConsultation(String id) {
//        if (Consultation.find.byId(Long.fromString(id)).delete())
//            return ok(Json.toJson("Deleted!"));
//
//        return notFound(Json.toJson("Not found!"));
//    }
}

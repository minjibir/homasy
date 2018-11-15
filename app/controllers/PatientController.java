package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Patient;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Security;


// @Security.Authenticated(Secured.class)
public class PatientController extends Controller {
    public static Result deleteAppointment(Long id) {
        return play.mvc.Results.TODO;
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result registerPatient() {
        JsonNode jsonNode = request().body().asJson();

        try {
            Patient patient = Json.fromJson(jsonNode, Patient.class);
            patient.save();
            return created(Json.toJson(patient));

        } catch (Exception e) {
            e.printStackTrace();
        }

        return forbidden("Not found.");
    }

    public Result getPatientById(Long patientId) {
        Patient patient = Patient.find.byId(patientId);
        if (patient != null) return ok(Json.toJson(patient));

        return notFound("Not found");
    }

    public Result getAllPatients() {
        return ok(Json.toJson(Patient.find.all()));
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result updatePatient() {
        JsonNode jsonNode = request().body().asJson();
        Patient iPatient;

        iPatient = Json.fromJson(jsonNode, Patient.class);

        if (Patient.find.byId(iPatient.patientId) != null) {
            iPatient.update();
            return ok(Json.toJson(iPatient));
        }

        return notFound(Json.toJson("Not found"));
    }

    public Result deletePatient(Long id) {
        return play.mvc.Results.TODO;
    }
}

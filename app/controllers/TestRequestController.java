package controllers;

import com.fasterxml.jackson.databind.JsonNode;

import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.UUID;

import models.TestRequest;

public class TestRequestController extends Controller {

    @BodyParser.Of(BodyParser.Json.class)
    public Result createTestRequest() {
        JsonNode jsonNode = request().body().asJson();
        TestRequest iTestRequest;

        iTestRequest = Json.fromJson(jsonNode, TestRequest.class);
        iTestRequest.save();
        System.out.println(Json.toJson(iTestRequest));

        return created(Json.toJson(iTestRequest));
    }

    public Result getAllTestRequests() {
        return ok(Json.toJson(TestRequest.find.all()));
    }

    public Result getTestRequest(Long testRequestId) {
        return ok(Json.toJson(TestRequest.find.byId((testRequestId))));
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result updateTestRequest() {
        JsonNode jsonNode = request().body().asJson();
        TestRequest iTestRequest;

        iTestRequest = Json.fromJson(jsonNode, TestRequest.class);

        if (TestRequest.find.byId(iTestRequest.testRequestId) != null) {
            iTestRequest.update();
            return ok(Json.toJson("Updated!"));
        }

        return notFound(Json.toJson("Not found"));
    }

    public Result deleteTestRequest(Long testRequestId) {
        if (TestRequest.find.byId(testRequestId) != null && TestRequest.find.byId(testRequestId).delete()) {
            return ok(Json.toJson("Deleted!"));
        }

        return notFound(Json.toJson("Not found!"));
    }
}

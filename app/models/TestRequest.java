package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class TestRequest extends Model {
    @Id
    public Long testRequestId;

    @NotNull
    public Long testsRequested;

    @NotNull
    public Long consultationId;

    @NotNull
    public Long patientId;

    @NotNull
    public Long doctorId;

    public boolean tested;

    @WhenCreated
    public LocalDateTime dateTimeRequested;

    public static Finder<Long, TestRequest> find = new Finder<Long, TestRequest>(TestRequest.class);

}

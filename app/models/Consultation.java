package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "sessions")
public class Consultation extends Model {

    @Id
    public long consultationId;

    //@NotNull
    public long appointmentId;

    // @NotNull
    public long patientId;

    //@NotNull
    public long doctorId;

    @NotNull
    public String statement; // This is the patient statement about what is bothering him.

    public String testtypes;

    @NotNull
    public String diagnosis;

    @NotNull
    public String prescription;

    //@NotNull
    @WhenCreated
    public LocalDateTime sessionDateTime;

    public static Finder find = new Finder<Long, Consultation>(Consultation.class);
}

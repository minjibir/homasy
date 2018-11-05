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
    
    @NotNull
    public long patientId;
    
    @NotNull
    public long doctorId;

    @NotNull
    public String statement;

    @NotNull
    public String diagnosis;
    
    public long appointmentId;

    @WhenCreated
    public LocalDateTime consultationDateTime;

    public static Finder find = new Finder<Long, Consultation>(Consultation.class);
}

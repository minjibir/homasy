package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "appointments")
public class Appointment extends Model {

    @Id
    public UUID appointmentId;

    @NotNull
    public UUID patientId;

    public UUID doctorId;

    public UUID receptionistId;

    @NotNull
    public LocalDateTime appointmentDateTime;

    @NotNull
    @WhenCreated
    public LocalDateTime timeOfAppointment;

    public static Finder find = new Finder<UUID, Appointment>(Appointment.class);
}

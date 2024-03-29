package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "prescription")
public class Prescription extends Model {

    @Id
    public Long prescriptionId;

    @NotNull
    public Long consultationId;

    @NotNull
    public Long patientId;

    @NotNull
    public Long doctorId;

    @NotNull
    public String prescriptionContent;

    public boolean prescriptionStatus;

    public String available;

    @WhenCreated
    public LocalDateTime prescriptionDateTime;

    public static Finder<Long, Prescription> find = new Finder<Long, Prescription>(Prescription.class);

    public List<Prescription> currentPrescriptions() {
        return null;
    }
}

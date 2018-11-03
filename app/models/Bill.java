package models;

import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
;

@Entity
@Table(name = "bills")
public class Bill extends Model {

    @Id
    public long billId;

    @NotNull
    public long patientId;

    @NotNull
    public long receptionistId;

    @NotNull
    public double amount;

    @WhenCreated
    public LocalDateTime billingDate;
}

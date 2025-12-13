package protein

import java.time.LocalDateTime

class ProteinEntry {
    Integer grams
    LocalDateTime loggedAt

    static constraints = {
        grams min: 1, nullable: false
        loggedAt nullable: true
    }

    def beforeInsert() {
        if (!loggedAt) {
            loggedAt = LocalDateTime.now()
        }
    }
}

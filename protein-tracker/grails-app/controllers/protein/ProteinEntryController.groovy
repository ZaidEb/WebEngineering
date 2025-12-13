package protein

import grails.gorm.transactions.Transactional

class ProteinEntryController {
    static allowedMethods = [save: 'POST']

    def list() {
        def entries = ProteinEntry.list(sort: 'loggedAt', order: 'desc')
        def total = entries?.sum { it.grams } ?: 0
        [entries: entries, total: total]
    }

    def create() {
        [proteinEntry: new ProteinEntry()]
    }

    @Transactional
    def save() {
        def gramsVal = params.int('grams')
        def entry = new ProteinEntry(grams: gramsVal)
        if (!entry.save(flush: true)) {
            render(view: 'create', model: [proteinEntry: entry])
            return
        }
        redirect(action: 'list')
    }
}

package protein.tracker

class UrlMappings {
    static mappings = {
        "/$controller/$action?/$id?(.$format)?"()
        "/"(controller: 'proteinEntry', action: 'list')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}

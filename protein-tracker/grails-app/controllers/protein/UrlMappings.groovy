package protein

class UrlMappings {
    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
            }
        }

        "/"(controller: 'proteinEntry', action: 'list')
        "500"(view:'/error')
        "404"(view:'/notFound')

    }
}

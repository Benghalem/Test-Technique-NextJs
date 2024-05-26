export interface WProductResult {
    results: ProductContent[]
    jop: JobDetails
}

export interface ProductContent {
    content: Product
    created_at: string
    update_at: string
    page: number
    url: string
    job_id: string
    status_code: number
    parser_type: string
}

export interface Product {
    url: string
    meta: Meta
    price: number
    title: string
    images: string[]
    rating: Rating
    seller: Seller
    currency: string
    warranty: string
    _warnings: string[]
    variations: Variations
    breadcrumbs?: string[]
    description: string
    out_of_stock: boolean
    specifications: Specifications[]
    parse_status_code: number
    price_strikethrough?: number
}

export interface Meta {
    sku: string
    gtin: string
}

export interface Rating {
    count: number
    rating: number
}

export interface Seller {
    id: string
    url: string
    name: string
    catalog_id: string
    official_name: string
}

export interface Variations {
    state: string
    product_id: string
    selected_options: SelectedOption[]
}

export interface SelectedOption {
    key: string
    value: string
}

export interface Specifications {
    key: string
    value: string
}

export interface JobDetails {
    callback_url: string
    client_id: string
    context: JobContext[]
    created_at: string
    domain: string
    geo_location: string
    id: string
    limit: number
    local: string | null
    pages: number
    pares: boolean
    pares_type: string
    parsing_instruction: string | null
    browser_instruction: string | null
    render: null | boolean
    url: string
    query: string
    source: string
    start_page: number
    status: string
    storage_type: string | null
    storage_url: string | null
    subdomain: string
    contant_encoding: string
    updated_at: string
    user_agent_type: string
    session_info: string | null
    statuses: any[]
    client_note: string | null
    _links: Link[]
}

export interface JobContext {
    key: string
    value: string
}

export interface Link {
    rel: string
    href: string
    method: string
}








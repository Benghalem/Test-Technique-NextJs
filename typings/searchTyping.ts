export interface SearchResult {
    results: Result[]
    total_results: number
    last_visible_page: number
    parese_status_code: number
    created_at: string
    updated_at: string
    page: number
    url: string
    job_id: string
    status_code: number
    parser_type: string
}

export interface Result {
    content: Content;
}

export interface Content {
    url: string
    organic: Organic[]
    total_results: number
    last_visible_page: number
    parese_status_code: number
}

export interface Organic {
    title: string
    seller: Seller
    product_id: string
    url: string
    image: string
    price: Price
    rating: Rating
    budget?: number
    variant?: Variant[]
}

export interface Price {
    price: number
    currency: string
}
export interface Rating {
    count: number
    rating: number
}
export interface Seller {
    name: string
}

export interface Variant {
    url: string
    title: string  
    pruduct_id: string
}

export interface Context {
    key: string
    value: string
}

export interface Link {
    rel: string
    href: string
    method: string
}

// Define job and context related interfaces if needed

export interface Job {
    callback_url: string
    client_id: string
    context: Context[]
    created_at: string
    domain: string
    geo_location: string
    id: string
    limit: number
    local: string | null
    pages: number
    pares:boolean
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
    cleant_notes: string | null
    _link: Link[]
}
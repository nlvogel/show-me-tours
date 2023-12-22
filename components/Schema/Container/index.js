import PropTypes from "prop-types";

export function Individual({schema}) {
    return <script type={`application/ld+json`}
                    dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
}

export function Multiple({schema}) {
    return <script type={`application/ld+json`}
                    dangerouslySetInnerHTML={{__html: JSON.stringify(schema.map(s => s))}}/>
}

Individual.propTypes = {
    schema: PropTypes.any
}

Multiple.propTypes = {
    schema: PropTypes.array
}
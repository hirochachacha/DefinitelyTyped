import { FuzzyCompositeTerm } from "../FuzzyCompositeTerm";
import { FuzzyTerm } from "../FuzzyTerm";

/**
 * Class for representing an OR operator.
 * Can be used to construct fuzzy rules.
 */
export class FuzzyOR extends FuzzyCompositeTerm {
    /**
     * Constructs a new fuzzy AND operator with the given values.
     * The constructor accepts and arbitrary amount of fuzzy terms.
     */
    constructor(...terms: FuzzyTerm[]);
}

# ADR: Migrating Website CMS from discontinued Forestry

Trello-card: [Link to Task](https://trello.com/c/wWlojmI5/1985-website-find-forestryio-replacement-for-cms-and-write-adr)

Decision Deadline: N/A

Author: [Maurovic Cachia](https://github.com/MomoRazor)

Participants: [Philipp Metzner](https://github.com/pylipp), [Hans Peter Gürtner](https://github.com/HaGuesto), [Roanna Kong](https://github.com/aerinsol)

## Status

Discussion

## Context or Problem Statement

The CMS currently in use on this website is no longer maintained, and therefore requires migrating from. Apart from this, it has also become clear that the current CMS situation is not ideal, as non-technical personnel find it hard to interact with the content, resulting in needing technical staff to update it.

This means that content management is bottlenecked by technical staff availability and by a lack of flexibility in the types of content that can be created.

Therefore, this migration provides an opportunity not only to move away from Forestry, but also to move away from headless CMS as a concept, and towards a more holistic approach to content management for the website.

## Decision Drivers

1. Support and End of Life (EoL)

- The main issue here is Forestry's EoL. Its replacement must be a CMS with a solid community, and an active development team working to support its functionality long term.

2. Ease of use

- Whether going for a Headless CMS or not, ease of use is at the forefront of the decision, in order to decrease the friction required to create and publish new content more regularly on the website.

3. Price

- Fully fledged CMSs are rarely free. In these cases, we must find the best bang for buck, preferably keeping it free, as it has been before.

4. Development Time

- Some CMS options might require the use of completely new technologies, such as moving away from the current React. Given the scale of the website, this should not be an immediate deal breaker, but development time should be considered regardless.

## Considered Options

There are a couple of possible replacements that I have found up till now:

### TinaCMS

- [TinaCMS](https://tina.io/) - This is the natural replacement of Forestry, as it is its direct descendant. While completely different, TinaCMS should offer the exact same feature set that Forestry offers, with as little change as possible.

The main issue with this process is that the migration guide does not seem to be in place, casting into doubt how mature the TinaCMS project is, and if it is very well maintained. That said, the GitHub seems very active.

On the positive, there is a very handy migration guide that seems to cover all bases, from initial migration to redeployment. The process seems fairly straightforward, including the deployment, which should only require a slight modification to the current build command.

Broad Implementation:

The implementation here would require first running the CLI migration, which does a lot of the work (this has been tested on a [separate branch]()). Following this, further changes can be made to standardize the information, such as standardizing certain page types into collections (such as blog posts) and building out custom reusable components.

Following this, we would need to register the project on TinaCloud. This is where authentication is handled for the CMS's production portal, and therefore a required step in order to have non-technical users updating content without accessing the repository itself.

Once the project is set up and content editors are added as collaborators, they would be able to build new pages and blogs using currently implemented blocks, and technical staff would only need to be involved in case new custom components are needed.

On a pricing note, this option remains free for only 2 distinct users on the project and 2 separate roles. There are [various paid tiers](https://tina.io/pricing) with different benefits.

### Statamic

- [Statamic](https://statamic.com/) - This is a PHP and Laravel based CMS, built with specific focus on customizability and ease of use. It provides a free tier with one super user account, but can be upgraded to a [pro version license](https://statamic.com/pricing).

In essence, the end result of a Statamic website would be similar to TinaCMS, with a few differences:

    - The site would have to be rebuilt in PHP as well as redeployed in a completely different environment.

    - Due to its Laravel roots, the CMS portal can be expanded to hold fully custom sections if the need arises.

    - Authentication is managed locally on the site itself, removing the need to register the project off-site (unlike TinaCMS).

The implementation here is far more involved than the TinaCMS one, as it involves a full re-write. That said, given the scale of the website, this should not be a huge undertaking.

### Keystatic

- [Keystatic](https://keystatic.com/) - After further research into this CMS, it was found to be way more developer-forward than is ideal for the requirements of this change. While Keystatic does also provide a portal from which to edit the pages in a no-code way, authentication to this Admin Portal would depend on GitHub accounts and repository permissions, therefore requiring non-technical staff to need GitHub accounts just to use this CMS.

Furthermore, the customizability on Keystatic is fairly limited, simply because Keystatic is layered on top of the code. The only parts of the site that would be changeable by non-technical staff would be the copy, as anything further from this would still need development time to change and restructure.

## Decision

| Option     | Non-Technical Customizability | Cost                             | Implementation Effort     | External Registration |
|------------|-------------------------------|----------------------------------|---------------------------|-----------------------|
| Tina CMS   | High                          | Free Tier (monthly pro options)  | Low                       | Required              |
| Statamic   | Unlimited                     | Free Tier (one time pro option)  | High                      | Not Required          |
| Keystatic  | Low                           | Fully Free                       | Medium                    | Not Required          |

Given the options above, I believe the best call at this point is to attempt migrating to TinaCMS, simply because Keystatic is not fully fledged enough (with respect to its competition here) and Statamic, while offering the most, is a significantly bigger implementation than TinaCMS.

The biggest issue with TinaCMS is the project registration on TinaCloud, required for CMS Portal access on production. If this hurdle can be overcome, TinaCMS should tick all our boxes in the shortest time.

## Consequences

Pros:

- A website that can be updated and maintained by non-technical staff, requiring only technical people when creating new custom blocks and sections.

- The removal of an outdated system (Forestry) which has been deprecated since 2023.

import { graphql, useStaticQuery } from 'gatsby';
import { InstaNodeQuery } from '../../../../types/graphql-types';

export const useInstagram = () => {
  const data: InstaNodeQuery = useStaticQuery(
    graphql`
      query InstaNode {
        allInstaNode(limit: 12) {
          nodes {
            id
            caption
            username
            localFile {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  );
  console.log('=====================', data);
  return data.allInstaNode.nodes.map((node: any) => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.username,
  }));
};

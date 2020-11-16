import InfoCard from "../components/InfoCard/InfoCard";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";


describe("<InfoCard />", () => {
    test("snapshot", () => {
      const tree = renderer.create(
        <InfoCard 
          title="title"
          srcSet="srcset"
          sizes="sizes"
          src="src"
          imgclass="class"
          alt="alt">
              Navigate to the search page to begin searching for recipes.
              Search by keywords that would included in the name of the recipe.
          </InfoCard>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    test("renders with correct props", () => {
      render(
        <InfoCard 
          title="title"
          srcSet="srcset"
          sizes="sizes"
          src="src"
          imgclass="class"
          alt="alt">
              Navigate to the search page to begin searching for recipes.
              Search by keywords that would included in the name of the recipe.
          </InfoCard>
      );
      expect(screen.getByText("title")).toBeInTheDocument();
      expect(screen.getByAltText("alt")).toBeInTheDocument();
      expect(screen.getByText(/Navigate to the search page/)).toBeInTheDocument();
    });
});
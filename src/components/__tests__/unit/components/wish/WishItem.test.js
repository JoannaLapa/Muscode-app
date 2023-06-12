import WishItem from '@/components/basicComponents/wish/WishItem.vue';
import { fireEvent, getByRole, render, screen } from '@testing-library/vue';

describe('WishItem', () => {
  const renderWishItem = () => {
    render(WishItem, {
      props: {
        element: {
          id: 0,
          name: 'iPhone 6s Plus 16GB',
          price: 1000,
          sale: 649,
          currency: '$',
          photoBase: '/assets/img1_133_200.jpg',
          photoEdit: '/assets/img1_200_300.jpg'
        }
      }
    });
  };

  it('Renders a label, because the element has a sale key', () => {
    renderWishItem();
    expect(screen.getByText('-35%')).toBeInTheDocument();
  });

  it('Renders h2 with a correct text', () => {
    renderWishItem();
    expect(screen.getByText('iPhone 6s Plus 16GB')).toBeInTheDocument();
  });

  it('Renders a picture with given alt', () => {
    renderWishItem();
    expect(screen.getByAltText('iPhone 6s Plus 16GB')).toBeInTheDocument();
  });

  it('Renders a sale', () => {
    renderWishItem();
    expect(screen.getByText('649 $')).toBeInTheDocument();
  });

  it('Renders a price', () => {
    renderWishItem();
    expect(screen.getByText('1000 $')).toBeInTheDocument();
  });

  it("Doesn't show EditWishItem when render", () => {
    renderWishItem();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

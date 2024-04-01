import { Meta, StoryObj } from '@storybook/angular';

import { ListComponent } from './list.component';

type ComponentWithCustomControls = ListComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/List',
  component: ListComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `List` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const List: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}

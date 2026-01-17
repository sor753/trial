import type { Family } from '~/interface';

interface FamilyInputProps {
  families: Family[];
}

const FamilyInput = ({ families }: FamilyInputProps) => {
  return (
    <div>
      Family Input Page
      <div></div>
    </div>
  );
};

export default FamilyInput;

import styled from "styled-components";
import { GreyBox } from "./Box";
import { ProfileHeader } from "./header";
import { Select } from "./select";
import { Line } from "../../elements/Hr";

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
`;

const Hr = styled(Line)`
  margin: 20px 0;
`;

ProfileBox.Header = ProfileHeader;
ProfileBox.GreyBox = GreyBox;
ProfileBox.Select = Select;
ProfileBox.Line = Hr;

export default ProfileBox;

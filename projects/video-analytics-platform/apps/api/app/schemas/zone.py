from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class ZoneCreateRequest(BaseModel):
    name: str = Field(min_length=1, max_length=80)
    x: int = Field(ge=0)
    y: int = Field(ge=0)
    width: int = Field(gt=0)
    height: int = Field(gt=0)


class ZoneResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    video_id: int
    name: str
    shape_json: dict
    created_at: datetime
